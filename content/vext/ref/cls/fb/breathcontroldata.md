---
title: BreathControlData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| BreathControlData()                                                          | Create a new instance of this container type.                                                                             |
| BreathControlData(BreathControlData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| BreathControlData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BreathControlData](BreathControlData). |

## Properties

| Name                           | Type   | Description |
| ------------------------------ | ------ | ----------- |
| breathControlTime              | number |             |
| breathControlReleaseTime       | number |             |
| breathControlPenaltyMultiplier | number |             |
| breathControlPenaltyTimeout    | number |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [BreathControlData](BreathControlData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BreathControlData](BreathControlData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
