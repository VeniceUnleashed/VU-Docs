---
title: SettingConfig
---


## Summary
### Constructors
| |
| ----------- |
| **[SettingConfig](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "key" >}} | string |
| {{< prop "nameSid" >}} | string |
| {{< prop "descSid" >}} | string |
| {{< prop "max" >}} | int |
| {{< prop "default" >}} | int |
| {{< prop "min" >}} | int |
| {{< prop "ranked" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SettingConfig](/vext/ref/fb/settingconfig) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SettingConfig" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SettingConfig {#constructor-0}
> **SettingConfig**()

Creates a new [SettingConfig](/vext/ref/fb/settingconfig) frostbite structure.

## Properties
### {{% prop-heading "key" %}}
> **string**

### {{% prop-heading "nameSid" %}}
> **string**

### {{% prop-heading "descSid" %}}
> **string**

### {{% prop-heading "max" %}}
> **int**

### {{% prop-heading "default" %}}
> **int**

### {{% prop-heading "min" %}}
> **int**

### {{% prop-heading "ranked" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [SettingConfig](/vext/ref/fb/settingconfig)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SettingConfig](/vext/ref/fb/settingconfig)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SettingConfig](/vext/ref/fb/settingconfig) type.

