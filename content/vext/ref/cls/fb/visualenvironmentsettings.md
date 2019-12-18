---
title: VisualEnvironmentSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| VisualEnvironmentSettings()                                                          | Create a new instance of this container type.                                                                                             |
| VisualEnvironmentSettings(VisualEnvironmentSettings other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| VisualEnvironmentSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VisualEnvironmentSettings](VisualEnvironmentSettings). |

## Properties

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| sunRotationX | number |             |
| sunRotationY | number |             |
| drawStats    | bool   |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VisualEnvironmentSettings](VisualEnvironmentSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VisualEnvironmentSettings](VisualEnvironmentSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
