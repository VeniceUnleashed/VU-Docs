---
title: EditableActions
---


## Summary
### Constructors
| |
| ----------- |
| **[EditableActions](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "actions" >}} | [EditableAction](/vext/ref/fb/editableaction)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EditableActions](/vext/ref/fb/editableactions) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EditableActions" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EditableActions {#constructor-0}
> **EditableActions**()

Creates a new [EditableActions](/vext/ref/fb/editableactions) frostbite structure.

## Properties
### {{% prop-heading "actions" %}}
> **[EditableAction](/vext/ref/fb/editableaction)**[]

## Methods
### Clone
> **Clone**(): [EditableActions](/vext/ref/fb/editableactions)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EditableActions](/vext/ref/fb/editableactions)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EditableActions](/vext/ref/fb/editableactions) type.

