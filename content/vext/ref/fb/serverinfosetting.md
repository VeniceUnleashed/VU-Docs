---
title: ServerInfoSetting
---


## Summary
### Constructors
| |
| ----------- |
| **[ServerInfoSetting](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "key" >}} | string |
| {{< prop "name" >}} | string |
| {{< prop "isBool" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ServerInfoSetting](/vext/ref/fb/serverinfosetting) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ServerInfoSetting" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ServerInfoSetting {#constructor-0}
> **ServerInfoSetting**()

Creates a new [ServerInfoSetting](/vext/ref/fb/serverinfosetting) frostbite structure.

## Properties
### {{% prop-heading "key" %}}
> **string**

### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "isBool" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [ServerInfoSetting](/vext/ref/fb/serverinfosetting)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ServerInfoSetting](/vext/ref/fb/serverinfosetting)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ServerInfoSetting](/vext/ref/fb/serverinfosetting) type.

