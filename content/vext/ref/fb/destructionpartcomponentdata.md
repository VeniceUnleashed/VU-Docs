---
title: DestructionPartComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[DestructionPartComponentData](#constructor-0)**() |
| **[DestructionPartComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DestructionPartComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[DestructionPartComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DestructionPartComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DestructionPartComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "objects" >}} | [GameObjectData](/vext/ref/fb/gameobjectdata)[] |
| {{< prop "partIndex" >}} | int |
| {{< prop "connectivityType" >}} | [DestructionConnectivityType](/vext/ref/fb/destructionconnectivitytype) |
| {{< prop "fixed" >}} | bool |
| {{< prop "fragile" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DestructionPartComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DestructionPartComponentData {#constructor-0}

> **DestructionPartComponentData**()

Creates a new [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata) frostbite instance.

### DestructionPartComponentData {#constructor-1}

> **DestructionPartComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DestructionPartComponentData {#constructor-2}

> **DestructionPartComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata). |

### DestructionPartComponentData {#constructor-3}

> **DestructionPartComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata). |

### DestructionPartComponentData {#constructor-4}

> **DestructionPartComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata). |

### DestructionPartComponentData {#constructor-5}

> **DestructionPartComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata). |

## Properties

### {{% prop-heading "objects" %}}

> **[GameObjectData](/vext/ref/fb/gameobjectdata)**[]

### {{% prop-heading "partIndex" %}}

> **int**

### {{% prop-heading "connectivityType" %}}

> **[DestructionConnectivityType](/vext/ref/fb/destructionconnectivitytype)**

### {{% prop-heading "fixed" %}}

> **bool**

### {{% prop-heading "fragile" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DestructionPartComponentData](/vext/ref/fb/destructionpartcomponentdata) type.

