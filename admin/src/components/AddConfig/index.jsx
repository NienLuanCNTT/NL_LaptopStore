import { UpdateConfig } from 'actions/configActions.js';
import axios from 'axios';
import { TOAST_OPTIONS } from 'constants/configConstants';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const AddConfig = (props) => {
    // const { productId } = props;
    const productId = '61737089dbbefe69882e26cc';
    const dispatch = useDispatch();
    const [config, setConfig] = useState({
        version: '',
        cpuTech: '',
        cpuType: '',
        cpuSpeed: '',
        busSpeed: '',
        ramCapacity: '',
        ramType: '',
        ramSpeed: '',
        ramSlot: '',
        ramMax: '',
        screenSize: '',
        screenType: '',
        resolution: '',
        sweepFrequency: '',
        bgPanels: '',
        screenTech: '',
    });

    useEffect(() => {
        if (productId) {
            const fetchConfig = async () => {
                const config = await axios.get(`api/config/${productId}`)
                const data = config.data[0] || [];

                if (data.length > 0) {
                    setConfig({
                        version: data.CPU.version,
                        cpuTech: data.CPU.cpuTech,
                        cpuType: data.CPU.cpuType,
                        cpuSpeed: data.CPU.cpuSpeed,
                        busSpeed: data.CPU.busSpeed,
                        ramCapacity: data.RAM.ramCapacity,
                        ramType: data.RAM.ramType,
                        ramSpeed: data.RAM.ramSpeed,
                        ramSlot: data.RAM.ramSlot,
                        ramMax: data.RAM.ramMax,
                        screenSize: data.Screen.screenSize,
                        screenType: data.Screen.screenType,
                        resolution: data.Screen.resolution,
                        sweepFrequency: data.Screen.sweepFrequency,
                        bgPanels: data.Screen.bgPanels,
                        screenTech: data.Screen.screenTech,
                    });
                }
            }
            fetchConfig();
        }
    }, [productId]);

    function FormError(props) {
        if (props.isHidden) { return null; }
        return (<div className="form-error">{props.errorMessage}</div>)
    }

    const [checkFrom, setCheckFrom] = useState({
        version: {
            isInputValid: true,
            errorMessage: '',
        },
        cpuTech: {
            isInputValid: true,
            errorMessage: '',
        },
        cpuType: {
            isInputValid: true,
            errorMessage: '',
        },
        cpuSpeed: {
            isInputValid: true,
            errorMessage: '',
        },
        busSpeed: {
            isInputValid: true,
            errorMessage: '',
        },
        ramCapacity: {
            isInputValid: true,
            errorMessage: '',
        },
        ramType: {
            isInputValid: true,
            errorMessage: '',
        },
        ramSpeed: {
            isInputValid: true,
            errorMessage: '',
        },
        ramSlot: {
            isInputValid: true,
            errorMessage: '',
        },
        ramMax: {
            isInputValid: true,
            errorMessage: '',
        },
        screenSize: {
            isInputValid: true,
            errorMessage: '',
        },
        screenType: {
            isInputValid: true,
            errorMessage: '',
        },
        resolution: {
            isInputValid: true,
            errorMessage: '',
        },
        sweepFrequency: {
            isInputValid: true,
            errorMessage: '',
        },
        bgPanels: {
            isInputValid: true,
            errorMessage: '',
        },
        screenTech: {
            isInputValid: true,
            errorMessage: '',
        },
    });

    const [check, setCheck] = useState({
        version: false, cpuTech: false, cpuType: false, cpuSpeed: false, busSpeed: false,
        ramCapacity: false, ramType: false, ramSpeed: false, ramSlot: false, ramMax: false,
        screenSize: false, screenType: false, resolution: false, sweepFrequency: false, bgPanels: false,
        screenTech: false,
    });

    const validateInput = (checkingText, id) => {
        if (checkingText) {
            setConfig({ ...config, [id]: checkingText });

            setCheckFrom({
                ...checkFrom,
                [id]: {
                    isInputValid: true,
                    errorMessage: '',
                }
            })
            setCheck({ ...check, [id]: true });
        } else {
            setCheckFrom({
                ...checkFrom,
                [id]: {
                    isInputValid: false,
                    errorMessage: 'Vui lòng điền đầy đủ thông tin!'
                }
            })
            setCheck({ ...check, [id]: false });
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let checkKey = 0;
        for (const [key, value] of Object.entries(check)) {
            if (!value) {
                setCheckFrom({
                    ...checkFrom,
                    [key]: {
                        isInputValid: false,
                        errorMessage: 'Vui lòng điền đầy đủ thông tin!!'
                    }
                });
            }
            if (value) {
                checkKey += 1;
            }

        }
        if (checkKey === 16) {
            dispatch(UpdateConfig({
                productId: '61737089dbbefe69882e26cc',
                CPU: {
                    version: config.version,
                    cpuTech: config.cpuTech,
                    cpuType: config.cpuType,
                    cpuSpeed: config.cpuSpeed,
                    busSpeed: config.busSpeed,
                },
                RAM: {
                    ramCapacity: config.ramCapacity,
                    ramType: config.ramType,
                    ramSpeed: config.ramSpeed,
                    ramSlot: config.ramSlot,
                    ramMax: config.ramMax,
                },
                Screen: {
                    screenSize: config.screenSize,
                    screenType: config.screenType,
                    resolution: config.resolution,
                    sweepFrequency: config.sweepFrequency,
                    bgPanels: config.bgPanels,
                    screenTech: config.screenTech,
                },
            }));
            toast.success("Đã cập nhật thông tin", {
                ...TOAST_OPTIONS,
            })
        }


    }

    return (
        <div className="modal">
            <div className="modal__wrapper">
                <div className="modal__box">
                    <form className="config-body" onSubmit={submitHandler}>
                        <span className="modal-close"><i className="far fa-times-circle"></i></span>
                        <div className="items-title">
                            <h1>Bộ xử lý - CPU</h1>
                        </div>
                        <div className="items">
                            <div className="config-item">
                                <label htmlFor="version">Phiên bản</label>
                                <input id="version" onChange={(e) => validateInput(e.target.value, 'version')} placeholder="Phiên bản" type="text" defaultValue={config?.version} />
                                <FormError
                                    isHidden={checkFrom.version.isInputValid}
                                    errorMessage={checkFrom.version.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="cpuTech">Công nghệ CPU</label>
                                <input id="cpuTech" onChange={(e) => validateInput(e.target.value, 'cpuTech')} placeholder="Công nghệ CPU" type="text" defaultValue={config?.cpuTech} />
                                <FormError
                                    isHidden={checkFrom.cpuTech.isInputValid}
                                    errorMessage={checkFrom.cpuTech.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="cpuType">Loại CPU</label>
                                <input id="cpuType" onChange={(e) => validateInput(e.target.value, 'cpuType')} placeholder="Loại CPU" type="text" defaultValue={config?.cpuType} />
                                <FormError
                                    isHidden={checkFrom.cpuType.isInputValid}
                                    errorMessage={checkFrom.cpuType.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="cpuSpeed">Tốc độ CPU</label>
                                <input id="cpuSpeed" onChange={(e) => validateInput(e.target.value, 'cpuSpeed')} placeholder="Tốc độ CPU" type="text" defaultValue={config?.cpuSpeed} />
                                <FormError
                                    isHidden={checkFrom.cpuSpeed.isInputValid}
                                    errorMessage={checkFrom.cpuSpeed.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="busSpeed">Tốc độ BUS</label>
                                <input id="busSpeed" onChange={(e) => validateInput(e.target.value, 'busSpeed')} placeholder="Tốc độ BUS" type="text" defaultValue={config?.busSpeed} />
                                <FormError
                                    isHidden={checkFrom.busSpeed.isInputValid}
                                    errorMessage={checkFrom.busSpeed.errorMessage}
                                />
                            </div>

                        </div>


                        <div className="items-title">
                            <h1>RAM</h1>
                        </div>
                        <div className="items">
                            <div className="config-item">
                                <label htmlFor="ramCapacity">Dung lượng RAM</label>
                                <input id="ramCapacity" onChange={(e) => validateInput(e.target.value, 'ramCapacity')} placeholder="Dung lượng RAM" type="text" defaultValue={config?.ramCapacity} />
                                <FormError
                                    isHidden={checkFrom.ramCapacity.isInputValid}
                                    errorMessage={checkFrom.ramCapacity.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="ramType">Loại RAM</label>
                                <input id="ramType" onChange={(e) => validateInput(e.target.value, 'ramType')} placeholder="Loại RAM" type="text" defaultValue={config?.ramType} />
                                <FormError
                                    isHidden={checkFrom.ramType.isInputValid}
                                    errorMessage={checkFrom.ramType.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="ramSpeed">Tốc độ RAM</label>
                                <input id="ramSpeed" onChange={(e) => validateInput(e.target.value, 'ramSpeed')} placeholder="Tốc độ RAM" type="text" defaultValue={config?.ramSpeed} />
                                <FormError
                                    isHidden={checkFrom.ramSpeed.isInputValid}
                                    errorMessage={checkFrom.ramSpeed.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="ramSlot">Số khe cắm rời</label>
                                <input id="ramSlot" onChange={(e) => validateInput(e.target.value, 'ramSlot')} placeholder="Số khe cắm rời" type="text" defaultValue={config?.ramSlot} />
                                <FormError
                                    isHidden={checkFrom.ramSlot.isInputValid}
                                    errorMessage={checkFrom.ramSlot.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="ramMax">Hỗ trợ RAM tối đa</label>
                                <input id="ramMax" onChange={(e) => validateInput(e.target.value, 'ramMax')} placeholder="Hỗ trợ RAM tối đa" type="text" defaultValue={config?.ramMax} />
                                <FormError
                                    isHidden={checkFrom.ramMax.isInputValid}
                                    errorMessage={checkFrom.ramMax.errorMessage}
                                />
                            </div>

                        </div>

                        <div className="items-title">
                            <h1>Màn Hình</h1>
                        </div>
                        <div className="items">
                            <div className="config-item">
                                <label htmlFor="screenSize">Kích thước màn hình</label>
                                <input id="screenSize" onChange={(e) => validateInput(e.target.value, 'screenSize')} placeholder="Kích thước màn hình" type="text" defaultValue={config?.screenSize} />
                                <FormError
                                    isHidden={checkFrom.screenSize.isInputValid}
                                    errorMessage={checkFrom.screenSize.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="screenType">Loại màn hình</label>
                                <input id="screenType" onChange={(e) => validateInput(e.target.value, 'screenType')} placeholder="Loại màn hình" type="text" defaultValue={config?.screenType} />
                                <FormError
                                    isHidden={checkFrom.screenType.isInputValid}
                                    errorMessage={checkFrom.screenType.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="resolution">Độ phân giải</label>
                                <input id="resolution" onChange={(e) => validateInput(e.target.value, 'resolution')} placeholder="Độ phân giải" type="text" defaultValue={config?.resolution} />
                                <FormError
                                    isHidden={checkFrom.resolution.isInputValid}
                                    errorMessage={checkFrom.resolution.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="sweepFrequency">Tần số quét</label>
                                <input id="sweepFrequency" onChange={(e) => validateInput(e.target.value, 'sweepFrequency')} placeholder="Tần số quét" type="text" defaultValue={config?.sweepFrequency} />
                                <FormError
                                    isHidden={checkFrom.sweepFrequency.isInputValid}
                                    errorMessage={checkFrom.sweepFrequency.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="bgPanels">Tấm nền</label>
                                <input id="bgPanels" onChange={(e) => validateInput(e.target.value, 'bgPanels')} placeholder="Tấm nền" type="text" defaultValue={config?.bgPanels} />
                                <FormError
                                    isHidden={checkFrom.bgPanels.isInputValid}
                                    errorMessage={checkFrom.bgPanels.errorMessage}
                                />
                            </div>

                            <div className="config-item">
                                <label htmlFor="screenTech">Công nghệ màn hình</label>
                                <input id="screenTech" onChange={(e) => validateInput(e.target.value, 'screenTech')} placeholder="Công nghệ màn hình" type="text" defaultValue={config?.screenTech} />
                                <FormError
                                    isHidden={checkFrom.screenTech.isInputValid}
                                    errorMessage={checkFrom.screenTech.errorMessage}
                                />
                            </div>
                        </div>


                        <button
                            type="submit"
                            className="btn-conf-update"
                        >
                            <i class="fas fa-level-up-alt"></i> Cập nhật
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddConfig;