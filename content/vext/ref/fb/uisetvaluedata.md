---
title: UISetValueData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| UISetValueData()                                                          | Create a new instance of this container type.                                                                       |
| UISetValueData(UISetValueData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| UISetValueData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [UISetValueData](/vext/ref/fb/uisetvaluedata/).                            |
| UISetValueData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [UISetValueData](/vext/ref/fb/uisetvaluedata/).                    |
| UISetValueData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [UISetValueData](/vext/ref/fb/uisetvaluedata/).              |
| UISetValueData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UISetValueData](/vext/ref/fb/uisetvaluedata/). |

## Properties

| Name        | Type                                 | Description |
| ----------- | ------------------------------------ | ----------- |
| dataSource  | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| intValue    | number                               |             |
| floatValue  | number                               |             |
| stringValue | string                               |             |
| boolValue   | bool                                 |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [UISetValueData](/vext/ref/fb/uisetvaluedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UISetValueData](/vext/ref/fb/uisetvaluedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
