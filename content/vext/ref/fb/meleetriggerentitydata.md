---
title: MeleeTriggerEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[MeleeTriggerEntityData](#constructor-0)**() |
| **[MeleeTriggerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MeleeTriggerEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[MeleeTriggerEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[MeleeTriggerEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[MeleeTriggerEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "connectTransform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "meleeType" >}} | [AntEnumeration](/vext/ref/fb/antenumeration) \| nil |
| {{< prop "meleeEnabled" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MeleeTriggerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MeleeTriggerEntityData {#constructor-0}

> **MeleeTriggerEntityData**()

Creates a new [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata) frostbite instance.

### MeleeTriggerEntityData {#constructor-1}

> **MeleeTriggerEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MeleeTriggerEntityData {#constructor-2}

> **MeleeTriggerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata). |

### MeleeTriggerEntityData {#constructor-3}

> **MeleeTriggerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata). |

### MeleeTriggerEntityData {#constructor-4}

> **MeleeTriggerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata). |

### MeleeTriggerEntityData {#constructor-5}

> **MeleeTriggerEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata). |

## Properties

### {{% prop-heading "connectTransform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "meleeType" %}}

> **[AntEnumeration](/vext/ref/fb/antenumeration)** \| **nil**

### {{% prop-heading "meleeEnabled" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MeleeTriggerEntityData](/vext/ref/fb/meleetriggerentitydata) type.

