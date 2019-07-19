// import { SettingsActionsKeys } from './actions';
import { SettingsInterface } from './state';
import { Reducer } from 'redux';

const Settings: Reducer = (state: SettingsInterface, action: any): SettingsInterface => {
    if (!state) {
        state = {
            common: {

            },
            github: {
                history: false,
            },
        };
    }

    switch (action.type) {
        // case SettingsActionsKeys.AddTabItem: 
            
        default:
            return state;
    }
}

export default Settings;