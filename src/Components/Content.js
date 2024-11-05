import React, { useState, useEffect } from "react";

const Content = ({ data = {}, onSave }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    title: data.title || "",
    intro: data.intro || "",
    quote: data.quote || "",
    button: data.button || "",
    url: data.url || "",
  });

  // Sync formData state with data props when data changes
  useEffect(() => {
    setFormData({
      title: data.title || "",
      intro: data.intro || "",
      quote: data.quote || "",
      button: data.button || "",
      url: data.url || "",
    });
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setEditMode(false);
    onSave(formData); // Call the parent save handler with updated data
  };

  return (
    <div className="content">
      {editMode ? (
        <div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <textarea
            name="intro"
            value={formData.intro}
            onChange={handleChange}
            placeholder="Intro"
          />
          <input
            type="text"
            name="quote"
            value={formData.quote}
            onChange={handleChange}
            placeholder="Quote"
          />
          <input
            type="text"
            name="button"
            value={formData.button}
            onChange={handleChange}
            placeholder="Button Text"
          />
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Button URL"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <header className="content__title">{formData.title}</header>
          <div className="content__text-wrapper">
            {formData.intro && <div className="content__about-intro">{formData.intro}</div>}
            {formData.quote && <p className="content__quote">{formData.quote}</p>}
          </div>
          {formData.button && formData.url && (
          <div className="content__expand-button-container">
            <a href={formData.url} className="content__expand-button" type="button">
              {formData.button}
            </a>
          </div>
          )}
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Content;
