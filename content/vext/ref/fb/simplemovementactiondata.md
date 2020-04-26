---
title: SimpleMovementActionData
---

Inherits from 
[SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata)

## Summary
### Constructors
| |
| ----------- |
| **[SimpleMovementActionData](#constructor-0)**() |
| **[SimpleMovementActionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SimpleMovementActionData](#constructor-2)**(other: [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata)) |
| **[SimpleMovementActionData](#constructor-3)**(other: [MovementActionData](/vext/ref/fb/movementactiondata)) |
| **[SimpleMovementActionData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "level" >}} | float |
| {{< prop "action" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "specialAnimationIndex" >}} | int |
| {{< prop "respawn" >}} | bool |
| {{< prop "teleport" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SimpleMovementActionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SimpleMovementActionData {#constructor-0}
> **SimpleMovementActionData**()

Creates a new [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata) frostbite instance.

### SimpleMovementActionData {#constructor-1}
> **SimpleMovementActionData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SimpleMovementActionData {#constructor-2}
> **SimpleMovementActionData**(other: [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata))

Casts an instance of type [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata) to [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata) | The instance to cast to [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata). |

### SimpleMovementActionData {#constructor-3}
> **SimpleMovementActionData**(other: [MovementActionData](/vext/ref/fb/movementactiondata))

Casts an instance of type [MovementActionData](/vext/ref/fb/movementactiondata) to [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MovementActionData](/vext/ref/fb/movementactiondata) | The instance to cast to [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata). |

### SimpleMovementActionData {#constructor-4}
> **SimpleMovementActionData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata). |

## Properties
### {{% prop-heading "level" %}}
> **float**

### {{% prop-heading "action" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "specialAnimationIndex" %}}
> **int**

### {{% prop-heading "respawn" %}}
> **bool**

### {{% prop-heading "teleport" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SimpleMovementActionData](/vext/ref/fb/simplemovementactiondata) type.

