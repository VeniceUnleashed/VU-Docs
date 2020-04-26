---
title: GameDataContainer
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[GameDataContainer](#constructor-0)**() |
| **[GameDataContainer](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GameDataContainer](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GameDataContainer" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GameDataContainer {#constructor-0}

> **GameDataContainer**()

Creates a new [GameDataContainer](/vext/ref/fb/gamedatacontainer) frostbite instance.

### GameDataContainer {#constructor-1}

> **GameDataContainer**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GameDataContainer](/vext/ref/fb/gamedatacontainer) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GameDataContainer {#constructor-2}

> **GameDataContainer**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GameDataContainer](/vext/ref/fb/gamedatacontainer). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GameDataContainer](/vext/ref/fb/gamedatacontainer). |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GameDataContainer](/vext/ref/fb/gamedatacontainer) type.

