// ToastMessage.js

import React from "react";
import { message } from "antd";
import { ReactComponent as WarningLogo } from "../../../../assets/icons/warning.svg";
import { ReactComponent as LinkLogo } from "../../../../assets/icons/link.svg";
import "../../../../themes/toast.scss";

const ToastMessage = ({ type, duration }) => {
    const getMessageContent = () => {
        switch (type) {
            case "warning":
                return (
                    <div className="warning-message">
                        <WarningLogo className="warning-icon" />
                        Please contact your travel agent
                    </div>
                );
            case "link":
                return (
                    <div className="link-message">
                        <LinkLogo className="link-icon" />
                        Link Copied
                    </div>
                );
            default:
                return null;
        }
    };

    return message.info({
        content: getMessageContent(),
        icon: null,
        duration: duration || 1,
    });
};

export default ToastMessage;
