---
title: LinkConnection
---


## Summary
### Constructors
| |
| ----------- |
| **[LinkConnection](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "source" >}} | [DataContainer](/vext/ref/shared/class/datacontainer) \| nil |
| {{< prop "target" >}} | [DataContainer](/vext/ref/shared/class/datacontainer) \| nil |
| {{< prop "sourceFieldId" >}} | int |
| {{< prop "targetFieldId" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [LinkConnection](/vext/ref/fb/linkconnection) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LinkConnection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LinkConnection {#constructor-0}
> **LinkConnection**()

Creates a new [LinkConnection](/vext/ref/fb/linkconnection) frostbite structure.

## Properties
### {{% prop-heading "source" %}}
> **[DataContainer](/vext/ref/shared/class/datacontainer)** | **nil**

### {{% prop-heading "target" %}}
> **[DataContainer](/vext/ref/shared/class/datacontainer)** | **nil**

### {{% prop-heading "sourceFieldId" %}}
> **int**

### {{% prop-heading "targetFieldId" %}}
> **int**

## Methods
### Clone
> **Clone**(): [LinkConnection](/vext/ref/fb/linkconnection)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[LinkConnection](/vext/ref/fb/linkconnection)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LinkConnection](/vext/ref/fb/linkconnection) type.

