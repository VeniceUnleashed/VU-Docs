---
title: VegetationBaseEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[VegetationBaseEntityData](#constructor-0)**() |
| **[VegetationBaseEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VegetationBaseEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[VegetationBaseEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[VegetationBaseEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[VegetationBaseEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VegetationBaseEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VegetationBaseEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "basePoseTransforms" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform)[] |
| {{< prop "basePoseTranslations" >}} | [Vec3](/vext/ref/shared/class/vec3)[] |
| {{< prop "hierarchy" >}} | int[] |
| {{< prop "mesh" >}} | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset) \| nil |
| {{< prop "shadowMesh" >}} | [SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset) \| nil |
| {{< prop "physicsData" >}} | [PhysicsEntityData](/vext/ref/fb/physicsentitydata) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VegetationBaseEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VegetationBaseEntityData {#constructor-0}
> **VegetationBaseEntityData**()

Creates a new [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata) frostbite instance.

### VegetationBaseEntityData {#constructor-1}
> **VegetationBaseEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VegetationBaseEntityData {#constructor-2}
> **VegetationBaseEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata). |

### VegetationBaseEntityData {#constructor-3}
> **VegetationBaseEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata). |

### VegetationBaseEntityData {#constructor-4}
> **VegetationBaseEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata). |

### VegetationBaseEntityData {#constructor-5}
> **VegetationBaseEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata). |

### VegetationBaseEntityData {#constructor-6}
> **VegetationBaseEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata). |

### VegetationBaseEntityData {#constructor-7}
> **VegetationBaseEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata). |

## Properties
### {{% prop-heading "basePoseTransforms" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**[]

### {{% prop-heading "basePoseTranslations" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**[]

### {{% prop-heading "hierarchy" %}}
> **int**[]

### {{% prop-heading "mesh" %}}
> **[SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset)** | **nil**

### {{% prop-heading "shadowMesh" %}}
> **[SkinnedMeshAsset](/vext/ref/fb/skinnedmeshasset)** | **nil**

### {{% prop-heading "physicsData" %}}
> **[PhysicsEntityData](/vext/ref/fb/physicsentitydata)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata) type.

