---
title: FormationData
---

Inherits from [GameDataContainer](/vext/ref/fb/gamedatacontainer)

## Summary

### Constructors

|  |
| --- |
| **[FormationData](#constructor-0)**() |
| **[FormationData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[FormationData](#constructor-2)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[FormationData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "positions" >}} | [Vec3](/vext/ref/shared/type/vec3)[] |
| {{< prop "name" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FormationData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FormationData {#constructor-0}

> **FormationData**()

Creates a new [FormationData](/vext/ref/fb/formationdata) frostbite instance.

### FormationData {#constructor-1}

> **FormationData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FormationData](/vext/ref/fb/formationdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### FormationData {#constructor-2}

> **FormationData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [FormationData](/vext/ref/fb/formationdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [FormationData](/vext/ref/fb/formationdata). |

### FormationData {#constructor-3}

> **FormationData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [FormationData](/vext/ref/fb/formationdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [FormationData](/vext/ref/fb/formationdata). |

## Properties

### {{% prop-heading "positions" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**[]

### {{% prop-heading "name" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FormationData](/vext/ref/fb/formationdata) type.

