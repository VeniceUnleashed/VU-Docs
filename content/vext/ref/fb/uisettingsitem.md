---
title: UISettingsItem
---


## Summary
### Constructors
| |
| ----------- |
| **[UISettingsItem](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "nameSid" >}} | string |
| {{< prop "startEndSymbols" >}} | [UISettingSymbols](/vext/ref/fb/uisettingsymbols) |
| {{< prop "setting" >}} | [ProfileOptionData](/vext/ref/fb/profileoptiondata) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UISettingsItem](/vext/ref/fb/uisettingsitem) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UISettingsItem" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UISettingsItem {#constructor-0}
> **UISettingsItem**()

Creates a new [UISettingsItem](/vext/ref/fb/uisettingsitem) frostbite structure.

## Properties
### {{% prop-heading "nameSid" %}}
> **string**

### {{% prop-heading "startEndSymbols" %}}
> **[UISettingSymbols](/vext/ref/fb/uisettingsymbols)**

### {{% prop-heading "setting" %}}
> **[ProfileOptionData](/vext/ref/fb/profileoptiondata)** | **nil**

## Methods
### Clone
> **Clone**(): [UISettingsItem](/vext/ref/fb/uisettingsitem)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UISettingsItem](/vext/ref/fb/uisettingsitem)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UISettingsItem](/vext/ref/fb/uisettingsitem) type.

