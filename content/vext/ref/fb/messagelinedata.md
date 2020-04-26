---
title: MessageLineData
---


## Summary
### Constructors
| |
| ----------- |
| **[MessageLineData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "messageSid" >}} | string |
| {{< prop "entryInputAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MessageLineData](/vext/ref/fb/messagelinedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MessageLineData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MessageLineData {#constructor-0}
> **MessageLineData**()

Creates a new [MessageLineData](/vext/ref/fb/messagelinedata) frostbite structure.

## Properties
### {{% prop-heading "messageSid" %}}
> **string**

### {{% prop-heading "entryInputAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

## Methods
### Clone
> **Clone**(): [MessageLineData](/vext/ref/fb/messagelinedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MessageLineData](/vext/ref/fb/messagelinedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MessageLineData](/vext/ref/fb/messagelinedata) type.

