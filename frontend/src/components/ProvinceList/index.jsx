import React from 'react';
import PropTypes from 'prop-types';

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
                    <label htmlFor="">Thành Phố</label>
                    <select
                        className=""
                        id="city"
                        onChange={onCityFilter}
                    >
                        <option value="Chọn thành phố">--Chọn Thành Phố--</option>
                        {
                            city.map((city) => (
                                <option
                                    key={city.value}
                                    value={city.value}
                                >
                                    {city.label}
                                </option>)
                            )
                        }
                    </select>
                </div>
                <div className=" box__select ship-address-district">
                    <label htmlFor="">Quận/Huyện</label>
                    <select
                        className=""
                        id="district"
                        defaultValue=""
                        options={district}
                        onChange={onDistrictFilter}
                    ><option value="Chọn thành phố">--Chọn Quận/Huyện--</option>
                        {
                            district.map((district) => (
                                <option
                                    key={district.value}
                                    value={district.value}
                                >
                                    {district.label}
                                </option>)
                            )
                        }
                    </select>
                </div>
            </div>
            <div className="box__select ship-address-commune">
                <label htmlFor="">Xã/Phường</label>
                <select
                    className=""
                    id="commune"
                    options={commune}
                    defaultValue=""
                ><option value="Chọn thành phố">--Chọn Xã/Phường-</option>
                    {
                        commune.map((commune) => (
                            <option
                                key={commune.value}
                                value={commune.value}
                            >
                                {commune.label}
                            </option>)
                        )
                    }
                </select>
            </div>
        </div>
    );
}

export default ProvinceList;