---
title: SpotLightEntityData
---

Inherits from [LocalLightEntityData](/vext/ref/fb/locallightentitydata)

## Summary

### Constructors

|  |
| --- |
| **[SpotLightEntityData](#constructor-0)**() |
| **[SpotLightEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SpotLightEntityData](#constructor-2)**(other: [LocalLightEntityData](/vext/ref/fb/locallightentitydata)) |
| **[SpotLightEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[SpotLightEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SpotLightEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SpotLightEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SpotLightEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "shape" >}} | [SpotLightShape](/vext/ref/fb/spotlightshape) |
| {{< prop "coneInnerAngle" >}} | float |
| {{< prop "coneOuterAngle" >}} | float |
| {{< prop "frustumFov" >}} | float |
| {{< prop "frustumAspect" >}} | float |
| {{< prop "orthoWidth" >}} | float |
| {{< prop "orthoHeight" >}} | float |
| {{< prop "texture" >}} | [TextureAsset](/vext/ref/fb/textureasset) \| nil |
| {{< prop "castShadowsMinLevel" >}} | [QualityLevel](/vext/ref/fb/qualitylevel) |
| {{< prop "castShadowsEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpotLightEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpotLightEntityData {#constructor-0}

> **SpotLightEntityData**()

Creates a new [SpotLightEntityData](/vext/ref/fb/spotlightentitydata) frostbite instance.

### SpotLightEntityData {#constructor-1}

> **SpotLightEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SpotLightEntityData](/vext/ref/fb/spotlightentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SpotLightEntityData {#constructor-2}

> **SpotLightEntityData**(other: [LocalLightEntityData](/vext/ref/fb/locallightentitydata))

Casts an instance of type [LocalLightEntityData](/vext/ref/fb/locallightentitydata) to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [LocalLightEntityData](/vext/ref/fb/locallightentitydata) | The instance to cast to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata). |

### SpotLightEntityData {#constructor-3}

> **SpotLightEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata). |

### SpotLightEntityData {#constructor-4}

> **SpotLightEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata). |

### SpotLightEntityData {#constructor-5}

> **SpotLightEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata). |

### SpotLightEntityData {#constructor-6}

> **SpotLightEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata). |

### SpotLightEntityData {#constructor-7}

> **SpotLightEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SpotLightEntityData](/vext/ref/fb/spotlightentitydata). |

## Properties

### {{% prop-heading "shape" %}}

> **[SpotLightShape](/vext/ref/fb/spotlightshape)**

### {{% prop-heading "coneInnerAngle" %}}

> **float**

### {{% prop-heading "coneOuterAngle" %}}

> **float**

### {{% prop-heading "frustumFov" %}}

> **float**

### {{% prop-heading "frustumAspect" %}}

> **float**

### {{% prop-heading "orthoWidth" %}}

> **float**

### {{% prop-heading "orthoHeight" %}}

> **float**

### {{% prop-heading "texture" %}}

> **[TextureAsset](/vext/ref/fb/textureasset)** \| **nil**

### {{% prop-heading "castShadowsMinLevel" %}}

> **[QualityLevel](/vext/ref/fb/qualitylevel)**

### {{% prop-heading "castShadowsEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SpotLightEntityData](/vext/ref/fb/spotlightentitydata) type.

