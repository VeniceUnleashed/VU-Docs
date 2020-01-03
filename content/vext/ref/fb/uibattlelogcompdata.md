---
title: UIBattleLogCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIBattleLogCompData()                                                          | Create a new instance of this container type.                                                                                 |
| UIBattleLogCompData(UIBattleLogCompData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIBattleLogCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIBattleLogCompData](UIBattleLogCompData).                  |
| UIBattleLogCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIBattleLogCompData](UIBattleLogCompData).                                      |
| UIBattleLogCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIBattleLogCompData](UIBattleLogCompData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIBattleLogCompData](UIBattleLogCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIBattleLogCompData](UIBattleLogCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
