---
title: PresetTypeConfig
---


## Summary
### Constructors
| |
| ----------- |
| **[PresetTypeConfig](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "presetId" >}} | int |
| {{< prop "key" >}} | string |
| {{< prop "nameSid" >}} | string |
| {{< prop "descSid" >}} | string |
| {{< prop "lockedSettings" >}} | [LockedSettingConfig](/vext/ref/fb/lockedsettingconfig)[] |
| {{< prop "predefined" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PresetTypeConfig](/vext/ref/fb/presettypeconfig) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PresetTypeConfig" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PresetTypeConfig {#constructor-0}
> **PresetTypeConfig**()

Creates a new [PresetTypeConfig](/vext/ref/fb/presettypeconfig) frostbite structure.

## Properties
### {{% prop-heading "presetId" %}}
> **int**

### {{% prop-heading "key" %}}
> **string**

### {{% prop-heading "nameSid" %}}
> **string**

### {{% prop-heading "descSid" %}}
> **string**

### {{% prop-heading "lockedSettings" %}}
> **[LockedSettingConfig](/vext/ref/fb/lockedsettingconfig)**[]

### {{% prop-heading "predefined" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [PresetTypeConfig](/vext/ref/fb/presettypeconfig)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PresetTypeConfig](/vext/ref/fb/presettypeconfig)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PresetTypeConfig](/vext/ref/fb/presettypeconfig) type.

