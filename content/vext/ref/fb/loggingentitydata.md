---
title: LoggingEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[LoggingEntityData](#constructor-0)**() |
| **[LoggingEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LoggingEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[LoggingEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[LoggingEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[LoggingEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "vec2Value" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "vec3Value" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "transformValue" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "floatValue" >}} | float |
| {{< prop "strings" >}} | string[] |
| {{< prop "intValue" >}} | int |
| {{< prop "boolValue" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LoggingEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LoggingEntityData {#constructor-0}

> **LoggingEntityData**()

Creates a new [LoggingEntityData](/vext/ref/fb/loggingentitydata) frostbite instance.

### LoggingEntityData {#constructor-1}

> **LoggingEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LoggingEntityData](/vext/ref/fb/loggingentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LoggingEntityData {#constructor-2}

> **LoggingEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [LoggingEntityData](/vext/ref/fb/loggingentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [LoggingEntityData](/vext/ref/fb/loggingentitydata). |

### LoggingEntityData {#constructor-3}

> **LoggingEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [LoggingEntityData](/vext/ref/fb/loggingentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [LoggingEntityData](/vext/ref/fb/loggingentitydata). |

### LoggingEntityData {#constructor-4}

> **LoggingEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [LoggingEntityData](/vext/ref/fb/loggingentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [LoggingEntityData](/vext/ref/fb/loggingentitydata). |

### LoggingEntityData {#constructor-5}

> **LoggingEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LoggingEntityData](/vext/ref/fb/loggingentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LoggingEntityData](/vext/ref/fb/loggingentitydata). |

## Properties

### {{% prop-heading "vec2Value" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "vec3Value" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "transformValue" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "floatValue" %}}

> **float**

### {{% prop-heading "strings" %}}

> **string**[]

### {{% prop-heading "intValue" %}}

> **int**

### {{% prop-heading "boolValue" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LoggingEntityData](/vext/ref/fb/loggingentitydata) type.

