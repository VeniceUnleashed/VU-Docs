---
title: MessageInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[MessageInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "rowTypeName" >}} | string |
| {{< prop "messageQueueSize" >}} | int |
| {{< prop "normalMessageTime" >}} | float |
| {{< prop "shortMessageTime" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MessageInfo](/vext/ref/fb/messageinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MessageInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MessageInfo {#constructor-0}
> **MessageInfo**()

Creates a new [MessageInfo](/vext/ref/fb/messageinfo) frostbite structure.

## Properties
### {{% prop-heading "rowTypeName" %}}
> **string**

### {{% prop-heading "messageQueueSize" %}}
> **int**

### {{% prop-heading "normalMessageTime" %}}
> **float**

### {{% prop-heading "shortMessageTime" %}}
> **float**

## Methods
### Clone
> **Clone**(): [MessageInfo](/vext/ref/fb/messageinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MessageInfo](/vext/ref/fb/messageinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MessageInfo](/vext/ref/fb/messageinfo) type.

