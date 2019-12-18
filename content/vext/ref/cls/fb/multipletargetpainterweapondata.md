---
title: MultipleTargetPainterWeaponData (Frostbite Container)
---
### Base Classes

[WeaponData](WeaponData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| MultipleTargetPainterWeaponData()                                                          | Create a new instance of this container type.                                                                                                         |
| MultipleTargetPainterWeaponData(MultipleTargetPainterWeaponData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| MultipleTargetPainterWeaponData([WeaponData](WeaponData) other)                            | Upcast an instance of type [WeaponData](WeaponData) to [MultipleTargetPainterWeaponData](MultipleTargetPainterWeaponData).                            |
| MultipleTargetPainterWeaponData([ToolData](ToolData) other)                                | Upcast an instance of type [ToolData](ToolData) to [MultipleTargetPainterWeaponData](MultipleTargetPainterWeaponData).                                |
| MultipleTargetPainterWeaponData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MultipleTargetPainterWeaponData](MultipleTargetPainterWeaponData). |

## Properties

| Name                | Type                         | Description |
| ------------------- | ---------------------------- | ----------- |
| spottingBehavior    | [SpottingType](SpottingType) |             |
| timeObjectIsPainted | number                       |             |
| angle               | number                       |             |
| timeObjectIsSpotted | number                       |             |
| range               | number                       |             |
| useSpotting         | bool                         |             |
| useLaserPainting    | bool                         |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MultipleTargetPainterWeaponData](MultipleTargetPainterWeaponData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MultipleTargetPainterWeaponData](MultipleTargetPainterWeaponData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
