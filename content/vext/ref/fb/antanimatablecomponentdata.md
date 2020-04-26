---
title: AntAnimatableComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[AntAnimatableComponentData](#constructor-0)**() |
| **[AntAnimatableComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AntAnimatableComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[AntAnimatableComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AntAnimatableComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AntAnimatableComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "subRealm" >}} | [SubRealm](/vext/ref/fb/subrealm) |
| {{< prop "animationData" >}} | [AntAnimationHandlerData](/vext/ref/fb/antanimationhandlerdata) |
| {{< prop "mesh" >}} | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset) \| nil |
| {{< prop "autoActivate" >}} | bool |
| {{< prop "animationControlledFromStart" >}} | bool |
| {{< prop "forceDisableCulling" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AntAnimatableComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AntAnimatableComponentData {#constructor-0}

> **AntAnimatableComponentData**()

Creates a new [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata) frostbite instance.

### AntAnimatableComponentData {#constructor-1}

> **AntAnimatableComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AntAnimatableComponentData {#constructor-2}

> **AntAnimatableComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata). |

### AntAnimatableComponentData {#constructor-3}

> **AntAnimatableComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata). |

### AntAnimatableComponentData {#constructor-4}

> **AntAnimatableComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata). |

### AntAnimatableComponentData {#constructor-5}

> **AntAnimatableComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "subRealm" %}}

> **[SubRealm](/vext/ref/fb/subrealm)**

### {{% prop-heading "animationData" %}}

> **[AntAnimationHandlerData](/vext/ref/fb/antanimationhandlerdata)**

### {{% prop-heading "mesh" %}}

> **[SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset)** \| **nil**

### {{% prop-heading "autoActivate" %}}

> **bool**

### {{% prop-heading "animationControlledFromStart" %}}

> **bool**

### {{% prop-heading "forceDisableCulling" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AntAnimatableComponentData](/vext/ref/fb/antanimatablecomponentdata) type.

