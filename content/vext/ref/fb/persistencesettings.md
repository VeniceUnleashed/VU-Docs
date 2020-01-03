---
title: PersistenceSettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| PersistenceSettings()                                                          | Create a new instance of this container type.                                                                                 |
| PersistenceSettings(PersistenceSettings other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| PersistenceSettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [PersistenceSettings](/vext/ref/fb/persistencesettings/).                    |
| PersistenceSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistenceSettings](/vext/ref/fb/persistencesettings/). |

## Properties

| Name                       | Type                                                     | Description |
| -------------------------- | -------------------------------------------------------- | ----------- |
| statCategoryTreeCollection | [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection/) |             |
| mpProfile                  | [PlayerTypeProfile](/vext/ref/fb/playertypeprofile/)                   |             |
| spProfile                  | [PlayerTypeProfile](/vext/ref/fb/playertypeprofile/)                   |             |
| coopProfile                | [PlayerTypeProfile](/vext/ref/fb/playertypeprofile/)                   |             |
| pointSystemParams          | [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset/)         |             |
| licenseConfig              | [LicenseConfiguration](/vext/ref/fb/licenseconfiguration/)             |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [PersistenceSettings](/vext/ref/fb/persistencesettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistenceSettings](/vext/ref/fb/persistencesettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
