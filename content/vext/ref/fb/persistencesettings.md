---
title: PersistenceSettings
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| PersistenceSettings()                                                          | Create a new instance of this container type.                                                                                 |
| PersistenceSettings(PersistenceSettings other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| PersistenceSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [PersistenceSettings](PersistenceSettings).                    |
| PersistenceSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistenceSettings](PersistenceSettings). |

## Properties

| Name                       | Type                                                     | Description |
| -------------------------- | -------------------------------------------------------- | ----------- |
| statCategoryTreeCollection | [StatCategoryTreeCollection](StatCategoryTreeCollection) |             |
| mpProfile                  | [PlayerTypeProfile](PlayerTypeProfile)                   |             |
| spProfile                  | [PlayerTypeProfile](PlayerTypeProfile)                   |             |
| coopProfile                | [PlayerTypeProfile](PlayerTypeProfile)                   |             |
| pointSystemParams          | [PointSystemParamsAsset](PointSystemParamsAsset)         |             |
| licenseConfig              | [LicenseConfiguration](LicenseConfiguration)             |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [PersistenceSettings](PersistenceSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistenceSettings](PersistenceSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
