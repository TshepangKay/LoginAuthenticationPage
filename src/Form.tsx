import React from 'react'

const formContainerStyle: React.CSSProperties = {
  maxWidth: '400px',
  margin: '40px auto',
  padding: '32px',
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
  fontFamily: 'inherit'
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '12px',
  fontWeight: 500,
  color: '#222'
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 10px',
  marginTop: '4px',
  marginBottom: '18px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '1rem'
}

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  background: '#0078d4',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '10px'
}

const Form: React.FC = () => {
  return (
    <div className="white-container">
      <div style={formContainerStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#0078d4' }}>Job Application Form</h2>
        <form>
          <div>
            <label style={labelStyle}>
              Full Name:
              <input type="text" name="name" required style={inputStyle} />
            </label>
          </div>
          <div>
            <label style={labelStyle}>
              Email:
              <input type="email" name="email" required style={inputStyle} />
            </label>
          </div>
          <div>
            <label style={labelStyle}>
              Phone Number:
              <input type="tel" name="phone" required style={inputStyle} />
            </label>
          </div>
          <div>
            <label style={labelStyle}>
              Position Applied For:
              <input type="text" name="position" required style={inputStyle} />
            </label>
          </div>
          <div>
            <label style={labelStyle}>
              LinkedIn Profile:
              <input type="url" name="linkedin" required style={inputStyle} />
            </label>
          </div>
          <div>
            <label style={labelStyle}>
              Cover Letter:
              <textarea name="coverLetter" rows={5} required style={{ ...inputStyle, resize: 'vertical' }} />
            </label>
          </div>
          <div>
            <label style={labelStyle}>
              Upload CV:
              <input type="file" name="cv" accept=".pdf,.doc,.docx" required style={inputStyle} />
            </label>
          </div>
          <div>
            <label style={labelStyle}>
              Other Documents:
              <input type="file" name="otherDocs" multiple style={inputStyle} />
            </label>
          </div>
          <button type="submit" style={buttonStyle}>Submit Application</button>
        </form>
      </div>
    </div>
  )
}

export default Form
