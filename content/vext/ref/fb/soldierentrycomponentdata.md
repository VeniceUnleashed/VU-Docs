---
title: SoldierEntryComponentData
---
### Base Classes

[EntryComponentData](/vext/ref/fb/entrycomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierEntryComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| SoldierEntryComponentData(SoldierEntryComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SoldierEntryComponentData([EntryComponentData](/vext/ref/fb/entrycomponentdata/) other)            | Upcast an instance of type [EntryComponentData](/vext/ref/fb/entrycomponentdata/) to [SoldierEntryComponentData](/vext/ref/fb/soldierentrycomponentdata/).            |
| SoldierEntryComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SoldierEntryComponentData](/vext/ref/fb/soldierentrycomponentdata/).                      |
| SoldierEntryComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoldierEntryComponentData](/vext/ref/fb/soldierentrycomponentdata/).                    |
| SoldierEntryComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierEntryComponentData](/vext/ref/fb/soldierentrycomponentdata/).              |
| SoldierEntryComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierEntryComponentData](/vext/ref/fb/soldierentrycomponentdata/). |

## Properties

| Name                     | Type                                           | Description |
| ------------------------ | ---------------------------------------------- | ----------- |
| aimingConstraints        | [AimingConstraintsData](/vext/ref/fb/aimingconstraintsdata/) |             |
| antEntryEnumeration      | [AntEnumeration](/vext/ref/fb/antenumeration/)               |             |
| alignConstraintsToEntity | bool                                           |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierEntryComponentData](/vext/ref/fb/soldierentrycomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierEntryComponentData](/vext/ref/fb/soldierentrycomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
