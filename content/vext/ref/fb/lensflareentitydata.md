---
title: LensFlareEntityData
---

Inherits from 
[SpatialEntityData](/vext/ref/fb/spatialentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[LensFlareEntityData](#constructor-0)**() |
| **[LensFlareEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[LensFlareEntityData](#constructor-2)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[LensFlareEntityData](#constructor-3)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[LensFlareEntityData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[LensFlareEntityData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[LensFlareEntityData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "elements" >}} | [LensFlareElement](/vext/ref/fb/lensflareelement)[] |
| {{< prop "occluderSize" >}} | float |
| {{< prop "visible" >}} | bool |
| {{< prop "halfRes" >}} | bool |
| {{< prop "debugDrawOccluder" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LensFlareEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LensFlareEntityData {#constructor-0}
> **LensFlareEntityData**()

Creates a new [LensFlareEntityData](/vext/ref/fb/lensflareentitydata) frostbite instance.

### LensFlareEntityData {#constructor-1}
> **LensFlareEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [LensFlareEntityData](/vext/ref/fb/lensflareentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### LensFlareEntityData {#constructor-2}
> **LensFlareEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata). |

### LensFlareEntityData {#constructor-3}
> **LensFlareEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata). |

### LensFlareEntityData {#constructor-4}
> **LensFlareEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata). |

### LensFlareEntityData {#constructor-5}
> **LensFlareEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata). |

### LensFlareEntityData {#constructor-6}
> **LensFlareEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [LensFlareEntityData](/vext/ref/fb/lensflareentitydata). |

## Properties
### {{% prop-heading "elements" %}}
> **[LensFlareElement](/vext/ref/fb/lensflareelement)**[]

### {{% prop-heading "occluderSize" %}}
> **float**

### {{% prop-heading "visible" %}}
> **bool**

### {{% prop-heading "halfRes" %}}
> **bool**

### {{% prop-heading "debugDrawOccluder" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LensFlareEntityData](/vext/ref/fb/lensflareentitydata) type.

