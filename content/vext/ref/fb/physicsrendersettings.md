---
title: PhysicsRenderSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[PhysicsRenderSettings](#constructor-0)**() |
| **[PhysicsRenderSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PhysicsRenderSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "renderSpecificPart" >}} | int |
| {{< prop "viewDistance" >}} | float |
| {{< prop "renderClient" >}} | bool |
| {{< prop "renderEffectWorld" >}} | bool |
| {{< prop "renderDetail" >}} | bool |
| {{< prop "renderStatic" >}} | bool |
| {{< prop "renderUngrouped" >}} | bool |
| {{< prop "renderRagdoll" >}} | bool |
| {{< prop "renderGroup" >}} | bool |
| {{< prop "renderPhantoms" >}} | bool |
| {{< prop "renderCharacterCollision" >}} | bool |
| {{< prop "renderWater" >}} | bool |
| {{< prop "renderSolidGeometry" >}} | bool |
| {{< prop "useShapeCache" >}} | bool |
| {{< prop "renderConstraints" >}} | bool |
| {{< prop "renderOnlyContactConstraints" >}} | bool |
| {{< prop "renderConstraintCount" >}} | bool |
| {{< prop "renderActiveConstraintCount" >}} | bool |
| {{< prop "renderSimulationIslands" >}} | bool |
| {{< prop "renderBroadphaseHandles" >}} | bool |
| {{< prop "renderDestructionConnections" >}} | bool |
| {{< prop "renderPartBoundingBoxes" >}} | bool |
| {{< prop "renderOnlyBoundingBoxes" >}} | bool |
| {{< prop "renderInertia" >}} | bool |
| {{< prop "renderCenterOfMass" >}} | bool |
| {{< prop "renderLinearVelocity" >}} | bool |
| {{< prop "renderCollidesWithTerrain" >}} | bool |
| {{< prop "renderCollisionSpheres" >}} | bool |
| {{< prop "renderEntityStats" >}} | bool |
| {{< prop "renderWorldStats" >}} | bool |
| {{< prop "showContactsInWorldStats" >}} | bool |
| {{< prop "showInactiveContactsInWorldStats" >}} | bool |
| {{< prop "showPhantomsInWorldStats" >}} | bool |
| {{< prop "showFixedObjectsInWorldStats" >}} | bool |
| {{< prop "renderMemoryUsed" >}} | bool |
| {{< prop "collisionSpawnDebug" >}} | bool |
| {{< prop "renderServer" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PhysicsRenderSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PhysicsRenderSettings {#constructor-0}
> **PhysicsRenderSettings**()

Creates a new [PhysicsRenderSettings](/vext/ref/fb/physicsrendersettings) frostbite instance.

### PhysicsRenderSettings {#constructor-1}
> **PhysicsRenderSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PhysicsRenderSettings](/vext/ref/fb/physicsrendersettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PhysicsRenderSettings {#constructor-2}
> **PhysicsRenderSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsRenderSettings](/vext/ref/fb/physicsrendersettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PhysicsRenderSettings](/vext/ref/fb/physicsrendersettings). |

## Properties
### {{% prop-heading "renderSpecificPart" %}}
> **int**

### {{% prop-heading "viewDistance" %}}
> **float**

### {{% prop-heading "renderClient" %}}
> **bool**

### {{% prop-heading "renderEffectWorld" %}}
> **bool**

### {{% prop-heading "renderDetail" %}}
> **bool**

### {{% prop-heading "renderStatic" %}}
> **bool**

### {{% prop-heading "renderUngrouped" %}}
> **bool**

### {{% prop-heading "renderRagdoll" %}}
> **bool**

### {{% prop-heading "renderGroup" %}}
> **bool**

### {{% prop-heading "renderPhantoms" %}}
> **bool**

### {{% prop-heading "renderCharacterCollision" %}}
> **bool**

### {{% prop-heading "renderWater" %}}
> **bool**

### {{% prop-heading "renderSolidGeometry" %}}
> **bool**

### {{% prop-heading "useShapeCache" %}}
> **bool**

### {{% prop-heading "renderConstraints" %}}
> **bool**

### {{% prop-heading "renderOnlyContactConstraints" %}}
> **bool**

### {{% prop-heading "renderConstraintCount" %}}
> **bool**

### {{% prop-heading "renderActiveConstraintCount" %}}
> **bool**

### {{% prop-heading "renderSimulationIslands" %}}
> **bool**

### {{% prop-heading "renderBroadphaseHandles" %}}
> **bool**

### {{% prop-heading "renderDestructionConnections" %}}
> **bool**

### {{% prop-heading "renderPartBoundingBoxes" %}}
> **bool**

### {{% prop-heading "renderOnlyBoundingBoxes" %}}
> **bool**

### {{% prop-heading "renderInertia" %}}
> **bool**

### {{% prop-heading "renderCenterOfMass" %}}
> **bool**

### {{% prop-heading "renderLinearVelocity" %}}
> **bool**

### {{% prop-heading "renderCollidesWithTerrain" %}}
> **bool**

### {{% prop-heading "renderCollisionSpheres" %}}
> **bool**

### {{% prop-heading "renderEntityStats" %}}
> **bool**

### {{% prop-heading "renderWorldStats" %}}
> **bool**

### {{% prop-heading "showContactsInWorldStats" %}}
> **bool**

### {{% prop-heading "showInactiveContactsInWorldStats" %}}
> **bool**

### {{% prop-heading "showPhantomsInWorldStats" %}}
> **bool**

### {{% prop-heading "showFixedObjectsInWorldStats" %}}
> **bool**

### {{% prop-heading "renderMemoryUsed" %}}
> **bool**

### {{% prop-heading "collisionSpawnDebug" %}}
> **bool**

### {{% prop-heading "renderServer" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PhysicsRenderSettings](/vext/ref/fb/physicsrendersettings) type.

