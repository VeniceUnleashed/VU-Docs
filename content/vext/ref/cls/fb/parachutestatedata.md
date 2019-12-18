---
title: ParachuteStateData (Frostbite Container)
---
### Base Classes

[CharacterStateData](CharacterStateData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ParachuteStateData()                                                          | Create a new instance of this container type.                                                                               |
| ParachuteStateData(ParachuteStateData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| ParachuteStateData([CharacterStateData](CharacterStateData) other)            | Upcast an instance of type [CharacterStateData](CharacterStateData) to [ParachuteStateData](ParachuteStateData).            |
| ParachuteStateData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ParachuteStateData](ParachuteStateData). |

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
| [ParachuteStateData](ParachuteStateData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ParachuteStateData](ParachuteStateData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
