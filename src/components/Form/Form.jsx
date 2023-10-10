import { useState } from 'react';
import { nanoid } from 'nanoid';
import './Form.css';

// eslint-disable-next-line react/prop-types
export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleNameInput = (e) => {
    setName(() => e.target.value);
  };
  const handleTimeInput = (e) => {
    setTimezone(() => e.target.value);
  };

  const resetForm = () => {
    setName(() => '');
    setTimezone(() => '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && timezone) {
      onSubmit({
        id: nanoid(),
        name,
        timezone,
      });
      resetForm();
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="form-label" htmlFor="name">Название</label>
          <input id="name" className="form-name" required="required" type="text" placeholder="Город" value={name} onChange={handleNameInput} />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="timezone">Временная зона</label>
          <input id="timezone" className="form-timezone" required="required" type="number" step="1" min="-12" max="12" placeholder="разница от UTC" value={timezone} onChange={handleTimeInput} />
        </div>
        <div className="form-field">
          <button className="form-add" type="submit">Добавить</button>
        </div>
      </form>
    </div>
  );
}
