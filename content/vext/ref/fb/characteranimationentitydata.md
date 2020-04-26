---
title: CharacterAnimationEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[CharacterAnimationEntityData](#constructor-0)**() |
| **[CharacterAnimationEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CharacterAnimationEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[CharacterAnimationEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CharacterAnimationEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CharacterAnimationEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "entitySpaceTransform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "controller" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "trackLength" >}} | float |
| {{< prop "externalTime" >}} | float |
| {{< prop "warpAnimationBlendTime" >}} | float |
| {{< prop "restoreControllerOnFinish" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CharacterAnimationEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CharacterAnimationEntityData {#constructor-0}

> **CharacterAnimationEntityData**()

Creates a new [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata) frostbite instance.

### CharacterAnimationEntityData {#constructor-1}

> **CharacterAnimationEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CharacterAnimationEntityData {#constructor-2}

> **CharacterAnimationEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata). |

### CharacterAnimationEntityData {#constructor-3}

> **CharacterAnimationEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata). |

### CharacterAnimationEntityData {#constructor-4}

> **CharacterAnimationEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata). |

### CharacterAnimationEntityData {#constructor-5}

> **CharacterAnimationEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata). |

## Properties

### {{% prop-heading "entitySpaceTransform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "controller" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "trackLength" %}}

> **float**

### {{% prop-heading "externalTime" %}}

> **float**

### {{% prop-heading "warpAnimationBlendTime" %}}

> **float**

### {{% prop-heading "restoreControllerOnFinish" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CharacterAnimationEntityData](/vext/ref/fb/characteranimationentitydata) type.

