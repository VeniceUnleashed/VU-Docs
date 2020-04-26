---
title: ObjectBlueprint
---

Inherits from [Blueprint](/vext/ref/fb/blueprint)

## Summary

### Constructors

|  |
| --- |
| **[ObjectBlueprint](#constructor-0)**() |
| **[ObjectBlueprint](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ObjectBlueprint](#constructor-2)**(other: [Blueprint](/vext/ref/fb/blueprint)) |
| **[ObjectBlueprint](#constructor-3)**(other: [EntityBusData](/vext/ref/fb/entitybusdata)) |
| **[ObjectBlueprint](#constructor-4)**(other: [DataBusData](/vext/ref/fb/databusdata)) |
| **[ObjectBlueprint](#constructor-5)**(other: [Asset](/vext/ref/fb/asset)) |
| **[ObjectBlueprint](#constructor-6)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "object" >}} | [GameObjectData](/vext/ref/fb/gameobjectdata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ObjectBlueprint" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ObjectBlueprint {#constructor-0}

> **ObjectBlueprint**()

Creates a new [ObjectBlueprint](/vext/ref/fb/objectblueprint) frostbite instance.

### ObjectBlueprint {#constructor-1}

> **ObjectBlueprint**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ObjectBlueprint](/vext/ref/fb/objectblueprint) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ObjectBlueprint {#constructor-2}

> **ObjectBlueprint**(other: [Blueprint](/vext/ref/fb/blueprint))

Casts an instance of type [Blueprint](/vext/ref/fb/blueprint) to [ObjectBlueprint](/vext/ref/fb/objectblueprint). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Blueprint](/vext/ref/fb/blueprint) | The instance to cast to [ObjectBlueprint](/vext/ref/fb/objectblueprint). |

### ObjectBlueprint {#constructor-3}

> **ObjectBlueprint**(other: [EntityBusData](/vext/ref/fb/entitybusdata))

Casts an instance of type [EntityBusData](/vext/ref/fb/entitybusdata) to [ObjectBlueprint](/vext/ref/fb/objectblueprint). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityBusData](/vext/ref/fb/entitybusdata) | The instance to cast to [ObjectBlueprint](/vext/ref/fb/objectblueprint). |

### ObjectBlueprint {#constructor-4}

> **ObjectBlueprint**(other: [DataBusData](/vext/ref/fb/databusdata))

Casts an instance of type [DataBusData](/vext/ref/fb/databusdata) to [ObjectBlueprint](/vext/ref/fb/objectblueprint). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataBusData](/vext/ref/fb/databusdata) | The instance to cast to [ObjectBlueprint](/vext/ref/fb/objectblueprint). |

### ObjectBlueprint {#constructor-5}

> **ObjectBlueprint**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [ObjectBlueprint](/vext/ref/fb/objectblueprint). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [ObjectBlueprint](/vext/ref/fb/objectblueprint). |

### ObjectBlueprint {#constructor-6}

> **ObjectBlueprint**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ObjectBlueprint](/vext/ref/fb/objectblueprint). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ObjectBlueprint](/vext/ref/fb/objectblueprint). |

## Properties

### {{% prop-heading "object" %}}

> **[GameObjectData](/vext/ref/fb/gameobjectdata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ObjectBlueprint](/vext/ref/fb/objectblueprint) type.

