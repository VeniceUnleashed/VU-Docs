---
title: VegetationTreeEntityData
---

Inherits from 
[VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[VegetationTreeEntityData](#constructor-0)**() |
| **[VegetationTreeEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VegetationTreeEntityData](#constructor-2)**(other: [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata)) |
| **[VegetationTreeEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[VegetationTreeEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[VegetationTreeEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[VegetationTreeEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VegetationTreeEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VegetationTreeEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "groundImpactEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "stemRipEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "stemPhysicsWidth" >}} | float |
| {{< prop "coliPlaneDepth" >}} | float |
| {{< prop "stemHitpoints" >}} | float |
| {{< prop "branchHitpoints" >}} | float |
| {{< prop "branchL2Hitpoints" >}} | float |
| {{< prop "stemStiffness" >}} | float |
| {{< prop "stemStiffnessSpread" >}} | float |
| {{< prop "branchStiffness" >}} | float |
| {{< prop "branchStiffnessL2" >}} | float |
| {{< prop "stemBoneCount" >}} | int |
| {{< prop "windStem" >}} | float |
| {{< prop "windBranch" >}} | float |
| {{< prop "windBranchL2" >}} | float |
| {{< prop "treeFallEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "breakableJointThreshold" >}} | float |
| {{< prop "fallDirectionEnd" >}} | float |
| {{< prop "localWindEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "impactThreshold" >}} | float |
| {{< prop "collisionImpactMultiplier" >}} | float |
| {{< prop "fallDirectionStart" >}} | float |
| {{< prop "splashDistantEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "bulletImpactEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "partsTimeToLive" >}} | float |
| {{< prop "shadowLODOffset" >}} | int |
| {{< prop "splashNearEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "collisionEffect" >}} | [EffectBlueprint](/vext/ref/fb/effectblueprint) \| nil |
| {{< prop "forceFullSim" >}} | bool |
| {{< prop "useImpactThreshold" >}} | bool |
| {{< prop "usePhysicsShapes" >}} | bool |
| {{< prop "constraintStemB1" >}} | bool |
| {{< prop "constraintStemB2" >}} | bool |
| {{< prop "clientSideOnly" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VegetationTreeEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VegetationTreeEntityData {#constructor-0}
> **VegetationTreeEntityData**()

Creates a new [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata) frostbite instance.

### VegetationTreeEntityData {#constructor-1}
> **VegetationTreeEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VegetationTreeEntityData {#constructor-2}
> **VegetationTreeEntityData**(other: [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata))

Casts an instance of type [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VegetationBaseEntityData](/vext/ref/fb/vegetationbaseentitydata) | The instance to cast to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). |

### VegetationTreeEntityData {#constructor-3}
> **VegetationTreeEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). |

### VegetationTreeEntityData {#constructor-4}
> **VegetationTreeEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). |

### VegetationTreeEntityData {#constructor-5}
> **VegetationTreeEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). |

### VegetationTreeEntityData {#constructor-6}
> **VegetationTreeEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). |

### VegetationTreeEntityData {#constructor-7}
> **VegetationTreeEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). |

### VegetationTreeEntityData {#constructor-8}
> **VegetationTreeEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata). |

## Properties
### {{% prop-heading "groundImpactEffect" %}}
> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** | **nil**

### {{% prop-heading "stemRipEffect" %}}
> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** | **nil**

### {{% prop-heading "stemPhysicsWidth" %}}
> **float**

### {{% prop-heading "coliPlaneDepth" %}}
> **float**

### {{% prop-heading "stemHitpoints" %}}
> **float**

### {{% prop-heading "branchHitpoints" %}}
> **float**

### {{% prop-heading "branchL2Hitpoints" %}}
> **float**

### {{% prop-heading "stemStiffness" %}}
> **float**

### {{% prop-heading "stemStiffnessSpread" %}}
> **float**

### {{% prop-heading "branchStiffness" %}}
> **float**

### {{% prop-heading "branchStiffnessL2" %}}
> **float**

### {{% prop-heading "stemBoneCount" %}}
> **int**

### {{% prop-heading "windStem" %}}
> **float**

### {{% prop-heading "windBranch" %}}
> **float**

### {{% prop-heading "windBranchL2" %}}
> **float**

### {{% prop-heading "treeFallEffect" %}}
> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** | **nil**

### {{% prop-heading "breakableJointThreshold" %}}
> **float**

### {{% prop-heading "fallDirectionEnd" %}}
> **float**

### {{% prop-heading "localWindEffect" %}}
> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** | **nil**

### {{% prop-heading "impactThreshold" %}}
> **float**

### {{% prop-heading "collisionImpactMultiplier" %}}
> **float**

### {{% prop-heading "fallDirectionStart" %}}
> **float**

### {{% prop-heading "splashDistantEffect" %}}
> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** | **nil**

### {{% prop-heading "bulletImpactEffect" %}}
> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** | **nil**

### {{% prop-heading "partsTimeToLive" %}}
> **float**

### {{% prop-heading "shadowLODOffset" %}}
> **int**

### {{% prop-heading "splashNearEffect" %}}
> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** | **nil**

### {{% prop-heading "collisionEffect" %}}
> **[EffectBlueprint](/vext/ref/fb/effectblueprint)** | **nil**

### {{% prop-heading "forceFullSim" %}}
> **bool**

### {{% prop-heading "useImpactThreshold" %}}
> **bool**

### {{% prop-heading "usePhysicsShapes" %}}
> **bool**

### {{% prop-heading "constraintStemB1" %}}
> **bool**

### {{% prop-heading "constraintStemB2" %}}
> **bool**

### {{% prop-heading "clientSideOnly" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VegetationTreeEntityData](/vext/ref/fb/vegetationtreeentitydata) type.

