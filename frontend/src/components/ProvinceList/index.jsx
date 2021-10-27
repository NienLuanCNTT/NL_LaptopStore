import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'custom-field/SelectField';

ProvinceList.propTypes = {
    city: PropTypes.array.isRequired,
    commune: PropTypes.array.isRequired,
    district: PropTypes.array.isRequired,
    filter: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired,
};

function ProvinceList(props) {
    const {
        city,
        filter,
        commune,
        district,
        setFilter,
    } = props;

    const onCityFilter = ({ target }) => {
        setFilter({ ...filter, cityCode: target.value });
    }
    const onDistrictFilter = ({ target }) => {
        setFilter({ ...filter, districtCode: target.value });
    }

    return (
        <div>
            <div className="card-form-inner">
                <div className="box__select ship-address-city">
                    <SelectField
                        label
                        name="Thành Phố" //lable name
                        id="city"
                        options={city}
                        defaultOption="--Chọn Thành Phố--"
                        onChange={onCityFilter}
                    />
                </div>
                <div className=" box__select ship-address-district">
                    <SelectField
                        label
                        name="Quận/Huyện" //lable name
                        id="district"
                        options={district}
                        defaultOption="--Chọn Quận/Huyện--"
                        onChange={onDistrictFilter}
                    />
                </div>
            </div>


            <div className="box__select ship-address-commune">
                <SelectField
                    label
                    name="Xã/Phường"
                    id="commune"
                    defaultOption="--Chọn Xã/Phường--"
                    options={commune}
                />
            </div>

            <div className="ship-address-specific">
                <input type="text" placeholder="Nhập địa chỉ cụ thể*" />
            </div>
        </div>
    );
}

export default ProvinceList;