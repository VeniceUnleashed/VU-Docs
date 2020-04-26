---
title: SimpleMovementActionBaseData
---

Inherits from 
[MovementActionData](/vext/ref/fb/movementactiondata)

## Summary
### Constructors
| |
| ----------- |
| **[SimpleMovementActionBaseData](#constructor-0)**() |
| **[SimpleMovementActionBaseData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SimpleMovementActionBaseData](#constructor-2)**(other: [MovementActionData](/vext/ref/fb/movementactiondata)) |
| **[SimpleMovementActionBaseData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "startTimeInfo" >}} | [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata) |
| {{< prop "runTimeInfo" >}} | [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SimpleMovementActionBaseData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SimpleMovementActionBaseData {#constructor-0}
> **SimpleMovementActionBaseData**()

Creates a new [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata) frostbite instance.

### SimpleMovementActionBaseData {#constructor-1}
> **SimpleMovementActionBaseData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SimpleMovementActionBaseData {#constructor-2}
> **SimpleMovementActionBaseData**(other: [MovementActionData](/vext/ref/fb/movementactiondata))

Casts an instance of type [MovementActionData](/vext/ref/fb/movementactiondata) to [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MovementActionData](/vext/ref/fb/movementactiondata) | The instance to cast to [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata). |

### SimpleMovementActionBaseData {#constructor-3}
> **SimpleMovementActionBaseData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata). |

## Properties
### {{% prop-heading "startTimeInfo" %}}
> **[SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata)**

### {{% prop-heading "runTimeInfo" %}}
> **[SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SimpleMovementActionBaseData](/vext/ref/fb/simplemovementactionbasedata) type.

