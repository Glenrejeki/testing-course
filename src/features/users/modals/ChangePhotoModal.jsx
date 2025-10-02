import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncChangePhotoProfile } from '../states/action';

export default function ChangePhotoModal({ onClose }) {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!photo) {
      alert('Pilih foto terlebih dahulu!');
      return;
    }

    setLoading(true);
    const result = await dispatch(asyncChangePhotoProfile(photo));
    setLoading(false);

    if (result.success) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Ubah Foto Profile</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {preview && (
              <div className="flex justify-center mb-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:bg-gray-400"
            >
              {loading ? 'Uploading...' : 'Simpan'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}