---
title: ParachuteStateData
---
### Base Classes

[CharacterStateData](/vext/ref/fb/characterstatedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ParachuteStateData()                                                          | Create a new instance of this container type.                                                                               |
| ParachuteStateData(ParachuteStateData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| ParachuteStateData([CharacterStateData](/vext/ref/fb/characterstatedata/) other)            | Upcast an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata/) to [ParachuteStateData](/vext/ref/fb/parachutestatedata/).            |
| ParachuteStateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ParachuteStateData](/vext/ref/fb/parachutestatedata/). |

## Properties

| Name                   | Type   | Description |
| ---------------------- | ------ | ----------- |
| deployTime             | number |             |
| terminalVelocity       | number |             |
| forwardDragCoefficient | number |             |
| angleOfAttack          | number |             |
| bankOffset             | number |             |
| throttleOffset         | number |             |
| brakeOffset            | number |             |
| maxRollVelocity        | number |             |
| maxPitchVelocity       | number |             |
| maxYawVelocity         | number |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [ParachuteStateData](/vext/ref/fb/parachutestatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ParachuteStateData](/vext/ref/fb/parachutestatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
