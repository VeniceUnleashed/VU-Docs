---
title: PropertyGateEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[PropertyGateEntityData](#constructor-0)**() |
| **[PropertyGateEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PropertyGateEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[PropertyGateEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PropertyGateEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PropertyGateEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "transformIn" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "vec4In" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "vec3In" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "floatIn" >}} | float |
| {{< prop "intIn" >}} | int |
| {{< prop "boolIn" >}} | bool |
| {{< prop "default" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PropertyGateEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PropertyGateEntityData {#constructor-0}

> **PropertyGateEntityData**()

Creates a new [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata) frostbite instance.

### PropertyGateEntityData {#constructor-1}

> **PropertyGateEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PropertyGateEntityData {#constructor-2}

> **PropertyGateEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata). |

### PropertyGateEntityData {#constructor-3}

> **PropertyGateEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata). |

### PropertyGateEntityData {#constructor-4}

> **PropertyGateEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata). |

### PropertyGateEntityData {#constructor-5}

> **PropertyGateEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata). |

## Properties

### {{% prop-heading "transformIn" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "vec4In" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "vec3In" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "floatIn" %}}

> **float**

### {{% prop-heading "intIn" %}}

> **int**

### {{% prop-heading "boolIn" %}}

> **bool**

### {{% prop-heading "default" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PropertyGateEntityData](/vext/ref/fb/propertygateentitydata) type.

