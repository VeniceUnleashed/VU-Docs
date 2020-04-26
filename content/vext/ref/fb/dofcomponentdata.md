---
title: DofComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[DofComponentData](#constructor-0)**() |
| **[DofComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DofComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[DofComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DofComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DofComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "nearDistanceScale" >}} | float |
| {{< prop "focusDistance" >}} | float |
| {{< prop "blurFilter" >}} | [BlurFilter](/vext/ref/fb/blurfilter) |
| {{< prop "blurFilterDeviation" >}} | float |
| {{< prop "farDistanceScale" >}} | float |
| {{< prop "blurAdd" >}} | float |
| {{< prop "scale" >}} | float |
| {{< prop "diffusionDofFocalLength" >}} | float |
| {{< prop "diffusionDofAperture" >}} | float |
| {{< prop "diffusionDofEnable" >}} | bool |
| {{< prop "enable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DofComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DofComponentData {#constructor-0}

> **DofComponentData**()

Creates a new [DofComponentData](/vext/ref/fb/dofcomponentdata) frostbite instance.

### DofComponentData {#constructor-1}

> **DofComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DofComponentData](/vext/ref/fb/dofcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DofComponentData {#constructor-2}

> **DofComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [DofComponentData](/vext/ref/fb/dofcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [DofComponentData](/vext/ref/fb/dofcomponentdata). |

### DofComponentData {#constructor-3}

> **DofComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DofComponentData](/vext/ref/fb/dofcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DofComponentData](/vext/ref/fb/dofcomponentdata). |

### DofComponentData {#constructor-4}

> **DofComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DofComponentData](/vext/ref/fb/dofcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DofComponentData](/vext/ref/fb/dofcomponentdata). |

### DofComponentData {#constructor-5}

> **DofComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DofComponentData](/vext/ref/fb/dofcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DofComponentData](/vext/ref/fb/dofcomponentdata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "nearDistanceScale" %}}

> **float**

### {{% prop-heading "focusDistance" %}}

> **float**

### {{% prop-heading "blurFilter" %}}

> **[BlurFilter](/vext/ref/fb/blurfilter)**

### {{% prop-heading "blurFilterDeviation" %}}

> **float**

### {{% prop-heading "farDistanceScale" %}}

> **float**

### {{% prop-heading "blurAdd" %}}

> **float**

### {{% prop-heading "scale" %}}

> **float**

### {{% prop-heading "diffusionDofFocalLength" %}}

> **float**

### {{% prop-heading "diffusionDofAperture" %}}

> **float**

### {{% prop-heading "diffusionDofEnable" %}}

> **bool**

### {{% prop-heading "enable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DofComponentData](/vext/ref/fb/dofcomponentdata) type.

