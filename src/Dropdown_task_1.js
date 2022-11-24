import axios from "axios";
import { useEffect, useState } from "react";
import Select from 'react-select'

export const Dropdown_task_1 = () => {
    const [certificate, setCertificate] = useState([]);
    const [loading, isLoading] = useState(true);

    const getCertificates = async () => {
        const { data } = await axios.get('https://securityjobapioverturedev.azurewebsites.net/api/Dropdown/getcertifications/1');
        const arr = []
        data.data.map(item => {
            arr.push({ value: item.id, label: item.name },)
        })
        setCertificate(arr);
        isLoading(false);
    }

    useEffect(() => {
        getCertificates();
    }, [])

    return (
        <div className="container">
            <div className="row mt-3">
                <h5>TASK - 1</h5>
                <div className="col d-flex gap-3">
                    <Select id="dropdown-box" className="select"
                        classNamePrefix="select" isMulti options={certificate} />
                    <div> {loading && <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>}</div>
                </div>
            </div>
        </div>
    )
}