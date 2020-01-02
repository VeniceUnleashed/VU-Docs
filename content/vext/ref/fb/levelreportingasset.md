---
title: LevelReportingAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| LevelReportingAsset()                                                          | Create a new instance of this container type.                                                                                 |
| LevelReportingAsset(LevelReportingAsset other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| LevelReportingAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [LevelReportingAsset](LevelReportingAsset).                                      |
| LevelReportingAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LevelReportingAsset](LevelReportingAsset). |

## Properties

| Name        | Type                                               | Description |
| ----------- | -------------------------------------------------- | ----------- |
| builtLevels | [LevelDescriptionAsset](LevelDescriptionAsset)\[\] |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [LevelReportingAsset](LevelReportingAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LevelReportingAsset](LevelReportingAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
