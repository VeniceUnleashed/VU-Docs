---
title: SettingsManager
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[DeclareBool](#declarebool)**(name: string, default: bool, options: [SettingOptions](/vext/ref/client/type/settingoptions)) | [ModSetting](/vext/ref/client/type/modsetting) |
| **[DeclareNumber](#declarenumber)**(name: string, default: float, min: float, max: float, options: [SettingOptions](/vext/ref/client/type/settingoptions)) | [ModSetting](/vext/ref/client/type/modsetting) |
| **[DeclareKeybind](#declarekeybind)**(name: string, default: [InputDeviceKeys](/vext/ref/fb/inputdevicekeys), options: [SettingOptions](/vext/ref/client/type/settingoptions)) | [ModSetting](/vext/ref/client/type/modsetting) |
| **[DeclareMultiKeybind](#declaremultikeybind)**(name: string, default: [InputDeviceKeys](/vext/ref/fb/inputdevicekeys){}, options: [SettingOptions](/vext/ref/client/type/settingoptions)) | [ModSetting](/vext/ref/client/type/modsetting) |
| **[DeclareString](#declarestring)**(name: string, default: string, minLength: int, maxLength: int, options: [SettingOptions](/vext/ref/client/type/settingoptions)) | [ModSetting](/vext/ref/client/type/modsetting) |
| **[DeclareOption](#declareoption)**(name: string, default: string \| nil, optionNames: string{}, allowEmpty: bool, options: [SettingOptions](/vext/ref/client/type/settingoptions)) | [ModSetting](/vext/ref/client/type/modsetting) |
| **[GetSetting](#getsetting)**(name: string) | [ModSetting](/vext/ref/client/type/modsetting) \| nil |
| **[DeleteSetting](#deletesetting)**(name: string) | void |

## Methods

### DeclareBool {#declarebool}

> **DeclareBool**(name: string, default: bool, options: [SettingOptions](/vext/ref/client/type/settingoptions)): [ModSetting](/vext/ref/client/type/modsetting)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |
| **default** | bool |  |
| **options** | [SettingOptions](/vext/ref/client/type/settingoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ModSetting](/vext/ref/client/type/modsetting)** |  |

### DeclareNumber {#declarenumber}

> **DeclareNumber**(name: string, default: float, min: float, max: float, options: [SettingOptions](/vext/ref/client/type/settingoptions)): [ModSetting](/vext/ref/client/type/modsetting)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |
| **default** | float |  |
| **min** | float |  |
| **max** | float |  |
| **options** | [SettingOptions](/vext/ref/client/type/settingoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ModSetting](/vext/ref/client/type/modsetting)** |  |

### DeclareKeybind {#declarekeybind}

> **DeclareKeybind**(name: string, default: [InputDeviceKeys](/vext/ref/fb/inputdevicekeys), options: [SettingOptions](/vext/ref/client/type/settingoptions)): [ModSetting](/vext/ref/client/type/modsetting)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |
| **default** | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys) |  |
| **options** | [SettingOptions](/vext/ref/client/type/settingoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ModSetting](/vext/ref/client/type/modsetting)** |  |

### DeclareMultiKeybind {#declaremultikeybind}

> **DeclareMultiKeybind**(name: string, default: [InputDeviceKeys](/vext/ref/fb/inputdevicekeys){}, options: [SettingOptions](/vext/ref/client/type/settingoptions)): [ModSetting](/vext/ref/client/type/modsetting)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |
| **default** | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys){} |  |
| **options** | [SettingOptions](/vext/ref/client/type/settingoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ModSetting](/vext/ref/client/type/modsetting)** |  |

### DeclareString {#declarestring}

> **DeclareString**(name: string, default: string, minLength: int, maxLength: int, options: [SettingOptions](/vext/ref/client/type/settingoptions)): [ModSetting](/vext/ref/client/type/modsetting)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |
| **default** | string |  |
| **minLength** | int |  |
| **maxLength** | int |  |
| **options** | [SettingOptions](/vext/ref/client/type/settingoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ModSetting](/vext/ref/client/type/modsetting)** |  |

### DeclareOption {#declareoption}

> **DeclareOption**(name: string, default: string \| nil, optionNames: string{}, allowEmpty: bool, options: [SettingOptions](/vext/ref/client/type/settingoptions)): [ModSetting](/vext/ref/client/type/modsetting)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |
| **default** | string \| nil |  |
| **optionNames** | string{} |  |
| **allowEmpty** | bool |  |
| **options** | [SettingOptions](/vext/ref/client/type/settingoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ModSetting](/vext/ref/client/type/modsetting)** |  |

### GetSetting {#getsetting}

> **GetSetting**(name: string): [ModSetting](/vext/ref/client/type/modsetting) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ModSetting](/vext/ref/client/type/modsetting)** \| **nil** |  |

### DeleteSetting {#deletesetting}

> **DeleteSetting**(name: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **name** | string |  |

