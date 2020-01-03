---
title: UIDetailedServerInfoCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| UIDetailedServerInfoCompData()                                                          | Create a new instance of this container type.                                                                                                   |
| UIDetailedServerInfoCompData(UIDetailedServerInfoCompData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| UIDetailedServerInfoCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIDetailedServerInfoCompData](UIDetailedServerInfoCompData).                  |
| UIDetailedServerInfoCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIDetailedServerInfoCompData](UIDetailedServerInfoCompData).                                      |
| UIDetailedServerInfoCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIDetailedServerInfoCompData](UIDetailedServerInfoCompData). |

## Properties

| Name     | Type                                       | Description |
| -------- | ------------------------------------------ | ----------- |
| settings | [ServerInfoSetting](ServerInfoSetting)\[\] |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIDetailedServerInfoCompData](UIDetailedServerInfoCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIDetailedServerInfoCompData](UIDetailedServerInfoCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
