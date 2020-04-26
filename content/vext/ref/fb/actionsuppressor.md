---
title: ActionSuppressor
---


## Summary
### Constructors
| |
| ----------- |
| **[ActionSuppressor](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "actionToSuppress" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "suppressingValue" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ActionSuppressor](/vext/ref/fb/actionsuppressor) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ActionSuppressor" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ActionSuppressor {#constructor-0}
> **ActionSuppressor**()

Creates a new [ActionSuppressor](/vext/ref/fb/actionsuppressor) frostbite structure.

## Properties
### {{% prop-heading "actionToSuppress" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "suppressingValue" %}}
> **float**

## Methods
### Clone
> **Clone**(): [ActionSuppressor](/vext/ref/fb/actionsuppressor)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ActionSuppressor](/vext/ref/fb/actionsuppressor)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ActionSuppressor](/vext/ref/fb/actionsuppressor) type.

