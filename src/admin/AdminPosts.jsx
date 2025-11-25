import { useNavigate } from "react-router-dom";
import api from "../api";
import { Container,Row,Col} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function AdminPosts() {
    const [formData, setFormData] = useState({
        title: "",
        image: null,
        content: "",
        metaTitle: "",
        metaDescription: "",
        metaKeywords: "",
        category: "",
        newCategory: "",
        tags: [],
        newTag: "",
    });
    const [categories, setCategories] = useState(["Technology", "Health", "Sports"]);
    const [tags, setTags] = useState(["React", "Laravel", "SEO"]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleCategoryAdd = () => {
        if (formData.newCategory && !categories.includes(formData.newCategory)) {
        setCategories([...categories, formData.newCategory]);
        setFormData({ ...formData, category: formData.newCategory, newCategory: "" });
        }
    };

    const handleTagAdd = () => {
        if (formData.newTag && !tags.includes(formData.newTag)) {
        setTags([...tags, formData.newTag]);
        setFormData({ ...formData, tags: [...formData.tags, formData.newTag], newTag: "" });
        }
    };

    const handleTagSelection = (tag) => {
        setFormData((prev) => ({
        ...prev,
        tags: prev.tags.includes(tag) ? prev.tags.filter(t => t !== tag) : [...prev.tags, tag],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


  return (
    <>
    
    <Container className="Admin-posts">
        <Row className="g-4">
          <Col lg={6} md={12}>
            <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                <h3>Create Post</h3>
                
                <input type="text" name="title" placeholder="Title" className="form-control mb-2" onChange={handleChange} required />
                <input type="file" name="image" className="form-control mb-2" onChange={handleFileChange} required />
                <textarea name="content" placeholder="Content" className="form-control mb-2" onChange={handleChange} required></textarea>
                
                <input type="text" name="metaTitle" placeholder="Meta Title" className="form-control mb-2" onChange={handleChange} />
                <input type="text" name="metaDescription" placeholder="Meta Description" className="form-control mb-2" onChange={handleChange} />
                <input type="text" name="metaKeywords" placeholder="Meta Keywords (comma separated)" className="form-control mb-2" onChange={handleChange} />
                
                <select name="category" className="form-control mb-2" onChange={handleChange} value={formData.category}>
                    <option value="">Select Category</option>
                    {categories.map((cat, index) => <option key={index} value={cat}>{cat}</option>)}
                </select>
                <input type="text" name="newCategory" placeholder="Add New Category" className="form-control mb-2" value={formData.newCategory} onChange={handleChange} />
                <button type="button" className="btn btn-primary btn-sm mb-2" onClick={handleCategoryAdd}>Add Category</button>
                
                <div>
                    <h6>Tags</h6>
                    {tags.map((tag, index) => (
                    <button key={index} type="button" className={`btn btn-sm me-1 ${formData.tags.includes(tag) ? "btn-success" : "btn-outline-secondary"}`} onClick={() => handleTagSelection(tag)}>
                        {tag}
                    </button>
                    ))}
                </div>
                <input type="text" name="newTag" placeholder="Add New Tag" className="form-control mb-2" value={formData.newTag} onChange={handleChange} />
                <button type="button" className="btn btn-primary btn-sm mb-2" onClick={handleTagAdd}>Add Tag</button>
                
                <button type="submit" className="btn btn-success">Submit</button>   
            </form>
          </Col>
        </Row>
    </Container>
    </>
  );
}

export default AdminPosts;
