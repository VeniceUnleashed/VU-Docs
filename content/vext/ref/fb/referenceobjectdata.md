---
title: ReferenceObjectData
---

Inherits from 
[GameObjectData](/vext/ref/fb/gameobjectdata)

## Summary
### Constructors
| |
| ----------- |
| **[ReferenceObjectData](#constructor-0)**() |
| **[ReferenceObjectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ReferenceObjectData](#constructor-2)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ReferenceObjectData](#constructor-3)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ReferenceObjectData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "blueprintTransform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "blueprint" >}} | [Blueprint](/vext/ref/fb/blueprint) \| nil |
| {{< prop "objectVariation" >}} | [ObjectVariation](/vext/ref/fb/objectvariation) \| nil |
| {{< prop "streamRealm" >}} | [StreamRealm](/vext/ref/fb/streamrealm) |
| {{< prop "castSunShadowEnable" >}} | bool |
| {{< prop "excluded" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ReferenceObjectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ReferenceObjectData {#constructor-0}
> **ReferenceObjectData**()

Creates a new [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) frostbite instance.

### ReferenceObjectData {#constructor-1}
> **ReferenceObjectData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ReferenceObjectData {#constructor-2}
> **ReferenceObjectData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ReferenceObjectData](/vext/ref/fb/referenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ReferenceObjectData](/vext/ref/fb/referenceobjectdata). |

### ReferenceObjectData {#constructor-3}
> **ReferenceObjectData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ReferenceObjectData](/vext/ref/fb/referenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ReferenceObjectData](/vext/ref/fb/referenceobjectdata). |

### ReferenceObjectData {#constructor-4}
> **ReferenceObjectData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ReferenceObjectData](/vext/ref/fb/referenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ReferenceObjectData](/vext/ref/fb/referenceobjectdata). |

## Properties
### {{% prop-heading "blueprintTransform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "blueprint" %}}
> **[Blueprint](/vext/ref/fb/blueprint)** | **nil**

### {{% prop-heading "objectVariation" %}}
> **[ObjectVariation](/vext/ref/fb/objectvariation)** | **nil**

### {{% prop-heading "streamRealm" %}}
> **[StreamRealm](/vext/ref/fb/streamrealm)**

### {{% prop-heading "castSunShadowEnable" %}}
> **bool**

### {{% prop-heading "excluded" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) type.

