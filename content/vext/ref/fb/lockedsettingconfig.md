---
title: LockedSettingConfig
---


## Summary
### Constructors
| |
| ----------- |
| **[LockedSettingConfig](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "key" >}} | string |
| {{< prop "value" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [LockedSettingConfig](/vext/ref/fb/lockedsettingconfig) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LockedSettingConfig" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LockedSettingConfig {#constructor-0}
> **LockedSettingConfig**()

Creates a new [LockedSettingConfig](/vext/ref/fb/lockedsettingconfig) frostbite structure.

## Properties
### {{% prop-heading "key" %}}
> **string**

### {{% prop-heading "value" %}}
> **int**

## Methods
### Clone
> **Clone**(): [LockedSettingConfig](/vext/ref/fb/lockedsettingconfig)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[LockedSettingConfig](/vext/ref/fb/lockedsettingconfig)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LockedSettingConfig](/vext/ref/fb/lockedsettingconfig) type.

