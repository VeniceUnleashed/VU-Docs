---
title: ComponentData
---

Inherits from [GameObjectData](/vext/ref/fb/gameobjectdata)

## Summary

### Constructors

|  |
| --- |
| **[ComponentData](#constructor-0)**() |
| **[ComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ComponentData](#constructor-2)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ComponentData](#constructor-3)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ComponentData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "components" >}} | [GameObjectData](/vext/ref/fb/gameobjectdata)[] |
| {{< prop "excluded" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ComponentData {#constructor-0}

> **ComponentData**()

Creates a new [ComponentData](/vext/ref/fb/componentdata) frostbite instance.

### ComponentData {#constructor-1}

> **ComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ComponentData](/vext/ref/fb/componentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ComponentData {#constructor-2}

> **ComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ComponentData](/vext/ref/fb/componentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ComponentData](/vext/ref/fb/componentdata). |

### ComponentData {#constructor-3}

> **ComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ComponentData](/vext/ref/fb/componentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ComponentData](/vext/ref/fb/componentdata). |

### ComponentData {#constructor-4}

> **ComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ComponentData](/vext/ref/fb/componentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ComponentData](/vext/ref/fb/componentdata). |

## Properties

### {{% prop-heading "transform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "components" %}}

> **[GameObjectData](/vext/ref/fb/gameobjectdata)**[]

### {{% prop-heading "excluded" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ComponentData](/vext/ref/fb/componentdata) type.

